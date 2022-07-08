import type { NextPage } from 'next';
<<<<<<< HEAD

const Home: NextPage = () => {
  return <div>Home page</div>;
=======
import IncomingMails from '../src/common/components/IncomingMails/IncomingMails';

const Home: NextPage = () => {
  return (
    <div>
      <IncomingMails />
    </div>
  );
>>>>>>> a50aff28d403a4b130060d682d968a71c6f40603
};

export default Home;
