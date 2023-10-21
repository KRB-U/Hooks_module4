// import { ExplorerView } from './HookModule/HookModule';
// import { Counter } from './Counter/Counter';
import { ToDo } from './ToDo/Todo';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <ExplorerView /> */}
      {/* <Counter /> */}
      <ToDo />
    </div>
  );
};
