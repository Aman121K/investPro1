import { Col, Container, Row } from "react-bootstrap";
import BannerComponent from "../components/BannerComponent";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";
import ImageCard from "../components/ImageCard";
import ButtonComponent from "../components/ButtonComponent";
import styles from "../../styles/Section.module.css"
import GreatThings from "../components/GreatThings";
import PopularPeople from "../components/PopularPeople";
import RecentPosts from "../components/RecentPosts";
import AmazingVideos from "../components/AmazingVideos";
import Cources from "../components/Cources";


export default function Home() {
  return (
    <>
      
      <BannerComponent/>
      <div>
        <AmazingVideos />
      </div>
      <div>
        <RecentPosts />
      </div>
      <div className={styles.greatThings}>
        <GreatThings />
      </div>
      <div>
        <PopularPeople />
      </div>
      <div>
        <Cources />
      </div>
      <div className="flaot1">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg>
      </div>
    </>
  );
}
