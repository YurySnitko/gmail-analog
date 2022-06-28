import type { NextPage } from 'next';
import MailList from '../src/common/ui-kit/MailList/MailList';
import { mails } from '../consts/mails';
import MailListHeader from '../src/common/ui-kit/MailListHeader/MailListHeader';

const Home: NextPage = () => {
  return (
    <div>
      <MailListHeader />
      <MailList mailList={mails} />
    </div>
  );
};

export default Home;
