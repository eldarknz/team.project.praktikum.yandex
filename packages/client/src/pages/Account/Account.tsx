import { Dialog } from '@components/Dialog';

export const AccountPage = () => {
  document.title = 'Профиль';

  return (
    <div>
      <Dialog isOpen={true} title="wow">
        content
      </Dialog>
    </div>
  );
};
