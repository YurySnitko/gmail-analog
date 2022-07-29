import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { MailData, mails } from '../../../mocked/mails';
import { Mail } from '../../../common/components/Mail/Mail';

const MailPage: FC = () => {
  const [mailData, setMailData] = useState<MailData>();
  const router = useRouter();
  const { mailId } = router.query;

  useEffect(() => {
    setMailData(mails.find((mail) => mail.id === mailId));
  }, [mailId]);

  if (!mailData) {
    return <div>Loading...</div>;
  }

  return <Mail mailData={mailData} />;
};

export default MailPage;
