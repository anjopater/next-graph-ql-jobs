import styled from "styled-components";

const ItemStyles = styled.div`
  background-color: ${(props) =>
    props.isFeatured ? "rgb(240,245,255)" : "transparent"};
  padding-bottom: ${(props) =>
    props.isFeatured ? "calc(14px + 4 * ((100vw - 320px) / 1280))" : 0};
  &:hover {
      background-color: rgb(240,245,255);
  }

  .content-job {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: calc(800px + 256 * ((100vw - 320px) / 1280));

    margin: 0 auto;
    padding: calc(14px + 4 * ((100vw - 320px) / 1280))
      calc(28px + 8 * ((100vw - 320px) / 1280));
    cursor: pointer;
  }

  .content-main-details {
    display: flex;
    align-items: center;

    & > div:nth-child(2) {
      @media screen and (min-width: 906px) {
          width: 19em;
      }
    }
  }
  .job-title {
    margin: 0;
    word-break: break-word;
  }

  .content-job-tags {
    align-items: end;
    display: flex;
    min-width: 10em;
    flex-direction: row-reverse;
    @media screen and (max-width: 906px) {
      display: none;
    }
  }

  .job-tags {
    display: flex;
  }

  .job-segment {
    font-size: 0.7em;
    font-size: 0.7em;
  }

  .content-location {
    display: flex;
    font-size: 0.72em;
    text-transform: capitalize;

    & > div:nth-child(1) {
      display: flex;
      align-items: center;
    }

    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`;

export default ItemStyles;
