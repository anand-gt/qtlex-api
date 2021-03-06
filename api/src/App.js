import React, { useState } from "react";
import { 
  Box, 
  Button, 
  Collapsible, 
  Heading, 
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { Notification } from 'grommet-icons';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const AppBar = (props) => (
  <Box
    tag='header'
    direction='row'
    align='center'
    justify='between'
    background='brand'
    pad={{left: 'medium', right: 'small', vertical: 'small'}}
    elevation='medium'
    style={{zIndex: '1'}}
    {...props}
  />
);

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
      <Grommet theme={theme} full>
        <Box fill>
          <AppBar>
            <Heading level='3' margin='none'>Qtlex API</Heading>
            <Button 
              icon={<Notification />} 
              onClick={() => setShowSidebar(!showSidebar)} 
            />
          </AppBar>
            <Box direction='row' flex overflow={{horizontal: 'hidden'}}>
              <Collapsible direction="horizontal" open={showSidebar}>
                <Box
                  flex
                  width='small'
                  background='light-2'
                  elevation='small'
                  align='center'
                  justify='center'
                >
                  sidebar
                </Box>
              </Collapsible>
              <Box flex align='center' justify='center'>
                app body
              </Box>
            </Box>
        </Box>
    </Grommet>
  );
}

export default App;
