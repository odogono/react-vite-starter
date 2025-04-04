import { ThemeTogglePortal } from '@components/theme/toggle-portal';
import { createLog } from '@helpers/log';

const log = createLog('Main');

const Main = () => {
  const message = 'ODGN Vite/React Starter';

  log.info(message);

  return (
    <>
      <div className="w-screen h-screen bg-background">
        <div className="flex items-center justify-center gap-4 w-full h-full ">
          <h1 className="text-text text-4xl ">{message}</h1>
        </div>
      </div>
      <ThemeTogglePortal />
    </>
  );
};

export default Main;
