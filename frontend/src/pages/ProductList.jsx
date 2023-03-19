import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { mobile, mobileXR, tablet } from "../responsive"

const Container = styled.div``
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })};
  ${mobileXR({ width: "0px 20px", display: "flex", flexDirection: "column" })};
  ${tablet({ width: "0px 20px", display: "flex", flexDirection: "column" })};
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })};
  ${mobileXR({ marginRight: "0px" })};
  ${tablet({ marginRight: "0px" })};
`

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};
  ${mobileXR({ margin: "10px 0px" })};
  ${tablet({ margin: "10px 0px" })};
`
const Option = styled.option``

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dreses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>Xl</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disabled selected>Newest:</Option>
            <Option>Price (asc)</Option>
            <Option>Price (dsc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default ProductList