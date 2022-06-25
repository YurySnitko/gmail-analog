import type { NextPage } from "next";
import MailList from "../src/common/ui-kit/MailList/MailList";
import { mails } from "../consts/mails";

const Home: NextPage = () => {
  return (
    <div>
      <MailList mailList={mails} />;
    </div>
  );
};

export default Home;
