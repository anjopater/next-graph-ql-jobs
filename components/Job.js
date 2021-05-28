import styled from "styled-components";
import ItemStyles from "./styles/ItemStyles";
import { flatEndpoint } from "../config";

const JobImageStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 60px;
  background: url(${(props) => props.url || "../static/jobbatical_logo.png"})
    center center / contain no-repeat white;
  width: calc(42px + 12 * ((100vw - 320px) / 1280));
  height: calc(42px + 12 * ((100vw - 320px) / 1280));
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin-right: 17px;
`;

const TagStyles = styled.div`
  border: ${(props) => (props.isFeatured ? "2px solid #05f" : "0px")};
  color: ${(props) => (props.isFeatured ? "#05f" : "#000")};
  border-radius: 4px;
  flex-shrink: 0;
  font-size: calc(10.7px + (2.8 * ((100vw - 320px) / 1280)));
  padding: 5.9px;
  margin: 3px;
  text-transform: capitalize;
`;

const IsFeaturedStyle = styled.div`
  max-width: calc(896px + (256 * ((100vw - 320px) / 1280)));
  margin: 0 auto;
  font-size: calc(11.2px + 3.2 * ((100vw - 320px) / 1280));
  text-transform: uppercase;
  color: rgb(0, 85, 255);
  font-weight: 600;
  padding: calc(14px + 4 * ((100vw - 320px) / 1280))
    calc(28px + 8 * ((100vw - 320px) / 1280))
    calc(0px + 0 * ((100vw - 320px) / 1280));
`;

const ImageStyled = styled.div`
  position: relative;
  display: inline-block;
  width: 1.33333em;
  height: 1em;
  background-image: url(${(props) => props.isoCode  ? `${flatEndpoint}/${props.isoCode}.svg` : `${flatEndpoint}/es.svg`});
  background-position: 50% center;
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 1em;
  line-height: 1em;
  vertical-align: middle;
  margin-right: calc(7px + 2 * ((100vw - 320px) / 1280));
`;

export default function Job({ job }) {
  return (
    <ItemStyles isFeatured={job.isFeatured}>
      <div>
        <div>
          {job.isFeatured && <IsFeaturedStyle>FEATURED</IsFeaturedStyle>}
          <div className="content-job">
            <div className="content-main-details">
              <JobImageStyles url={job.company.logoUrl}></JobImageStyles>
              <div>
                <h3 className="job-title">{job.title}</h3>
                <div className="job-segment">{job.company.name}</div>
              </div>
              <div className="content-job-tags">
                <div className="job-tags">
                  {job.tags.map((j, i) => {
                    return (
                      <TagStyles key={i} isFeatured={job.isFeatured}>{j.name}</TagStyles>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="content-location">
              {job.cities.length > 0 && (
                <div>
                  <ImageStyled isoCode={job.cities[0].country.isoCode} ></ImageStyled>
                  <div>
                    {job.cities.map((jc, i) => {
                      return i === job.cities.length - 1 ? (
                        <span key={i}>{jc.name}</span>
                      ) : (
                        <span key={i}>{jc.name}, </span>
                      );
                    })}
                  </div>
                </div>
              )}
              {job.cities.length > 0 && job.remotes.length > 0 && (
                <em>, {job.remotes[0].type}</em>
              )}
              {job.remotes.length > 0 && job.cities.length == 0 && (
                <em>{job.remotes[0].type}</em>
              )}
            </div>
          </div>
        </div>
      </div>
    </ItemStyles>
  );
}
