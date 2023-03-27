import TopNav from 'src/components/TopNav'
const MainLayout = ({ children }) => {
  return (
    <>
      <TopNav />
      {children}
    </>
  )
}

export default MainLayout
