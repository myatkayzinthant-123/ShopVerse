import { FeaturedProducts } from "../components"
import Hero from "../components/Hero"
import {customFetch} from "../utils/index"

const url = '/products?featured=true'

const featuresProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url)
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuresProductsQuery)
  console.log(response);
  const products = response.data.data
  return {products}
}

const Landing = () => {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing
