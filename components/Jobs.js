import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styled from "styled-components";
import Job from "./Job";
  import PropTypes from 'prop-types';

export const ALL_JOBS_QUERY = gql`
  query ALL_JOBS_QUERY {
    jobs {
      id
      title
      cities {
        name
        country {
          name
          isoCode
        }
      }
      commitment {
        title
      }
      slug
      remotes {
        type
      }
      isFeatured
      tags(first: 3) {
        name
      }
      company {
        name
        logoUrl
      }
    }
  }
`;

const JobListStyles = styled.div``;

export default function Jobs() {
  const { data, error, loading } = useQuery(ALL_JOBS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <JobListStyles>
        {data.jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </JobListStyles>
    </div>
  );
}

Jobs.propTypes = {
  page: PropTypes.any
};
