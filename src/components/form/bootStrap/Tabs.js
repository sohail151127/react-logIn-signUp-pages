import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BasicExample from './BootStrapCard';
import AlertDismissibleExample from './Alert'




function ExampleTabs() {
  return (
    <Tabs
      
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div className=' m-3'>
        Welcome to my new page created with the help of react-bootstrap
        </div>
      
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <BasicExample />
      </Tab>
      <Tab eventKey="contact" title="Contact">
      <AlertDismissibleExample />
      </Tab>
    </Tabs>
  );
}

export default ExampleTabs;