import Main from "./about/page";
import DashboardLayout from "./layout/layout";

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <Main />
    </DashboardLayout>
  );
};

export default Home;
