import styled from 'styled-components'
import Text from './Text'

const TeamContainer = styled.div`
  margin: 50px 0;
`

const TeamMember = styled.div`
  min-height: 200px;
  margin-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 60px 1fr;
  grid-column-gap: 50px;
  grid-template-areas:
    "head name"
    "head bio";

  @media(max-width: 720px) {
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100px 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-template-areas:
      "head name"
      "bio bio";
  }
`

const Headshot = styled.div`
  grid-area: head;
  min-height: 100px;
  min-width: 100px;
  background-image: url('${props => props.headshotUrl}');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;

  @media(max-width: 720px) {
    background-position: left;
  }
`

const NameTitle = styled.div`
  margin: auto 0;
  text-align: left;
`

const Bio = styled.div`
  grid-area: bio;
  margin-top: 20px;
`

const TeamMembers = ({ teamMembers }) => (
  <TeamContainer>
    {teamMembers.map(teamMember => (
      <TeamMember key={teamMember.name}>
        <Headshot headshotUrl={teamMember.headshot.url} />
        <NameTitle>
          <h3>{teamMember.name}</h3>
          <h4>{teamMember.title}</h4>
        </NameTitle>
        <Bio>
          <Text textAlign='left'>
            {teamMember.bio}
          </Text>
        </Bio>
      </TeamMember>
    ))}
  </TeamContainer>
)

export default TeamMembers
