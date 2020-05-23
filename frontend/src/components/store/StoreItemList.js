import React from 'react';
import { Dimmer, Loader, Grid, Container } from 'semantic-ui-react';
import StoreItem from './StoreItem';
import './StoreItem.css';

const StoreItemList = (props) => {

    if (props.items.length === 0){
		
        return (
          <Dimmer active inverted>
              <Loader inverted content='Loading' />
          </Dimmer>)
      }

      const StoreItems = props.items.map(item => {
        return (
          <StoreItem item={item} key={item.id}/>
        )
      })
  
      return (
        <Container fluid className="main-container">
            <Grid relaxed container columns={5}>
                {StoreItems}
            </Grid>
       </Container>

      )
}
export default StoreItemList;