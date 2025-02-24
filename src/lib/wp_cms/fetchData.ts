// 这里 是cuda操作，
import {fetchAPI} from "./wp_cms_api"
import {FormatTime} from "@/lib/timeTools";


// 拿到 posts 列表
export async function getAllPostsForHome(preview) {
    const data = await fetchAPI(
        `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            id
            title
            excerpt
            slug
            date
            author {
              node {
                name
                firstName
                lastName
              }
            }
          }
        }
      }
    }
  `,
        {
            variables: {
                onlyEnabled: !preview,
                preview,
            },
        },
    );

    return transDataGetAllPostsForHome(data?.posts);
}


type Dict = {
    [key: string]: any;
};

type Node = {
    [key: string]: any;
};

type Edge = {
    node: Node;
};

type InputDict = {
    edges: Edge[];
};

function transDataGetAllPostsForHome(inputDict: InputDict): InputDict {
    const convertedDict: InputDict = {
        edges: [],
    };

    inputDict.edges.forEach((edge) => {
        const convertedNode: Node = {};

        for (const key in edge.node) {
            if (edge.node.hasOwnProperty(key)) {
                if (key === 'excerpt') {
                    convertedNode[key] = edge.node[key];
                } else if (key === 'date') {
                    convertedNode['dateTime'] = edge.node[key];
                    convertedNode['date'] = FormatTime(new Date(edge.node[key]), 'YYYY-MM-DD HH:mm:ss');
                    // console.log('dateTime:', convertedNode['dateTime'])
                    // console.log('date:', convertedNode['date'])
                } else {
                    convertedNode[key] = edge.node[key];
                }
            }
        }

        convertedDict.edges.push({node: convertedNode});
    });

    // console.log('convertedDict:', convertedDict)
    return convertedDict;
}


export async function getPreviewPost(id, idType = "DATABASE_ID") {
    const data = await fetchAPI(
        `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
        {
            variables: {id, idType},
        },
    );
    return data.post;
}

export async function getAllPostsWithSlug() {
    const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
    return data?.posts;
}


export async function getAllPosts(preview) {
    const data = await fetchAPI(
        `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                
              }
            }
          }
        }
      }
    }
  `,
        {
            variables: {
                onlyEnabled: !preview,
                preview,
            },
        },
    );

    return data?.posts;
}


export async function getPostAndMorePosts(slug, preview, previewData) {
    const postPreview = preview && previewData?.post;
    // The slug may be the id of an unpublished post
    const isId = Number.isInteger(Number(slug));
    const isSamePost = isId
        ? Number(slug) === postPreview.id
        : slug === postPreview.slug;
    const isDraft = isSamePost && postPreview?.status === "draft";
    const isRevision = isSamePost && postPreview?.status === "publish";
    const query = `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
        // Only some of the fields of a revision are considered as there are some inconsistencies
        isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
    }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `
    const data = await fetchAPI(query,
        {
            variables: {
                id: isDraft ? postPreview.id : slug,
                idType: isDraft ? "DATABASE_ID" : "SLUG",
            },
        },
    );

    // Draft posts may not have an slug
    if (isDraft) data.post.slug = postPreview.id;
    // Apply a revision (changes in a published post)
    if (isRevision && data.post.revisions) {
        const revision = data.post.revisions.edges[0]?.node;

        if (revision) Object.assign(data.post, revision);
        delete data.post.revisions;
    }

    // Filter out the main post
    data.posts.edges = data.posts.edges.filter(({node}) => node.slug !== slug);
    // If there are still 3 posts, remove the last one
    if (data.posts.edges.length > 2) data.posts.edges.pop();

    console.log('data: ', data)
    return data;
}