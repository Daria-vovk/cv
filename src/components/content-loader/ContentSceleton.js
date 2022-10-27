import ContentLoader from "react-content-loader"

const ContentSceleton = (props) => (
  <ContentLoader 
    speed={2}
    width={500}
    height={500}
    viewBox="0 0 500 100"
    backgroundColor="#757070"
    foregroundColor="#c9c5c5"
    {...props}
  >
    <circle cx="172" cy="61" r="57" />
  </ContentLoader>
)

export default ContentSceleton;