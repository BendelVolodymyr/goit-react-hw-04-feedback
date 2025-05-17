import { NotificationProps } from '../../types/Notification';

const Notification: React.FC<NotificationProps> = ({
  message,
}): JSX.Element => {
  return <h2>{message}</h2>;
};

export default Notification;
