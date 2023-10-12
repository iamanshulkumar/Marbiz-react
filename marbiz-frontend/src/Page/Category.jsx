import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import CelebGallery from '../Components/CelebGalleries';

import {
  getInfluencersFeturedList,
  getInfluencersList,
} from "../services/api/api-service";


const optionsPlatform = [
  { value: 'instagram', label: 'Instagram' },
  { value: 'youtube', label: 'Youtube' },
  { value: 'usergeneratedcontent', label: 'User Generated Content' }
]
const optionsCategory = [
  { value: 'lifestyle', label: 'Life Style' },
  { value: 'fashion', label: 'Fashion' },
  { value: 'travel', label: 'Travel' }
]

// Placeholder data (example)
const placeholderData = [
  {
    id: 1,
    fullName: "Kiku Sharda",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tr:w-200,h-300,fo-auto/tring/202208161306_zZXQp5Fugove8q8U.png",
    category: [{ label: "Actor" }],
  },
  {
    id: 2,
    fullName: "Mohit Malhotra",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    category: [{ label: "Actor" }],
  },
  {
    id: 3,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 4,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 5,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 6,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 7,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 8,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
];


const Category = () => {

  const [list, setList] = useState([]);

  useEffect(() => {

    getInfluencersList(8, "Influencers")
      .then((result) => {

        if (Array.isArray(result) && result.length > 0) {

          setList(result);

        } else {
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setList(placeholderData);
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);

      });

  }, []);
  return (
    <div >

      {/* Search filters */}
      <Container className='py-5' >
        <Row className='d-grid align-content-top justify-content-center' >
          <form>
            <div className='d-flex bg-dark p-2 align-items-center rounded-6'>

              <div className="multi-select-category">

                <Select
                  placeholder="Platform"
                  name="platform"
                  id="platform"
                  className="basic-multi-select "
                  classNamePrefix="select"
                  options={optionsPlatform}
                />
              </div>

              <div className="ms-3 multi-select-category">
                <Select
                  isMulti
                  placeholder="Category"
                  name="category"
                  id="category"
                  className="basic-multi-select "
                  classNamePrefix="select"
                  options={optionsCategory}

                />
              </div>
              <div className='ms-3'>
                <Button type="submit" className='srch-btn fs-6 rounded-pill align-items-center d-flex'><BsSearch /></Button>
              </div>

            </div>
          </form>

        </Row>
      </Container>


      {/* Celeb Gallery */}
      <Container className='mb-5'>
        <Row>
          <CelebGallery
            title="Influencer"
            subtitle="Hire top influencer across all platforms"
            list={list}
            
          />
        </Row>
      </Container>
    </div>
  )
}

export default Category