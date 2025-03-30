import contentTypes from '~/lib/contentTypesForQueries'

export function useContent() {
  // Function to get all content items of a specific type
  const getAll = async (contentType) => {
    // Get properties for the requested content type or use default if not found
    // const properties = contentTypes[contentType] || contentTypes.default
    // const query = groq`*[_type == '${contentType}']`
    // const { data , error} = useSanityQuery(query)
    //
    const query = groq`*[ _type == project ]`
    const { data } = await useSanityQuery(query)

    return computed(() => data.value || [])
  }

  // Function to get a single content item by type and slug
  const getOne = async (contentType, slug) => {
    // Get properties for the requested content type or use default if not found
    const properties = contentTypes[contentType] || contentTypes.default
    const query = groq`*[_type == '${contentType}']`
    const { data } = await useSanityQuery(query, { slug, properties })

    return computed(() => data.value)
  }

  return { getAll, getOne }
}
