import React from 'react';
import { Formik, Form, Field } from 'formik';
import "../../resources/css/header.css";

const Header = ({setPhotos}) => {
    return ( 
        <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async value => {
            //llamar api
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${value.search}`, {
              headers: {
                'Authorization': `Client-ID ${process.env.REACT_APP_SERVICES_KEY}`
              }
            })
            const data = await response.json();
            setPhotos(data.results);
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
     );
}
 
export default Header;