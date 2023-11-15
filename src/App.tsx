import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Layout>
      Hello world
      <>
        <Card 
          id={1} 
          paragraph='Typescript'
          details='front e back'
        />
      </>
      <>
      <div>
        <Card 
          id={2}
          paragraph='HTML'
          details='front'
        />
      </div>
      </>
      <>
      <div>
        <Card 
          id={2}
          paragraph='SQL'
          details='banco de dados'
          />
      </div>
      </> 
      </Layout>
    </>
  );
}

export default App;
