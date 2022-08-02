import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { MailData } from '../../../mocked/mails';
import { Mail } from '../../../common/components/Mail/Mail';
import { useAppSelector } from '../../../hooks/redux.hook';
import { Loader } from '../../../common/ui-kit/components/Loader/Loader';

const MailPage: FC = () => {
  const [mailData, setMailData] = useState<MailData>();
  const router = useRouter();
  const { mailId } = router.query;
  const { mails } = useAppSelector((state) => state.mail);

  useEffect(() => {
    setMailData(mails.find((mail) => mail._id === mailId));
  }, [mailId, mails]);

  if (!mailData) {
    return <Loader />;
  }

  return <Mail mailData={mailData} />;
};

export default MailPage;
