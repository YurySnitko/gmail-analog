import {
  AddToDriveRounded,
  AttachFileRounded,
  CreateRounded,
  InsertLinkRounded,
  InsertPhotoOutlined,
  LockClock,
  MoodRounded,
} from '@mui/icons-material';

export const mailAnswerControls = [
  { id: 1, title: 'Прикрепить файлы', Icon: AttachFileRounded },
  { id: 2, title: 'Вставить ссылку', Icon: InsertLinkRounded },
  { id: 3, title: 'Вставить смайлик', Icon: MoodRounded },
  {
    id: 4,
    title: 'Вставить ссылку на файлы в Google диске',
    Icon: AddToDriveRounded,
  },
  { id: 5, title: 'Добавить фото', Icon: InsertPhotoOutlined },
  { id: 6, title: 'Переключатель конфиденциального режима', Icon: LockClock },
  { id: 7, title: 'Вставить подпись', Icon: CreateRounded },
];
