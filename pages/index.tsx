import type { NextPage } from 'next';
import IncomingMails from '../src/common/components/IncomingMails/IncomingMails';

const Home: NextPage = () => {
  return (
    <div>
      <IncomingMails />
    </div>
  );
};

export default Home;
