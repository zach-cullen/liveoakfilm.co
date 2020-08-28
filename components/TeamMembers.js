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
  grid-column-gap: 50px;
`

const Profile = styled.div`
  text-align: left;
`

const Headshot = styled.div`
  background-image: url('http://localhost:1337${props => props.headshotUrl}');
  background-repeat: no-repeat;
  background-position: top;
  background-size: contain;
`

const Name = styled.h3`
  font-size: 20px;
`

const Title = styled.h4`
  margin-bottom: 20px;
`

const Bio = styled.div`

`

const TeamMembers = ({ teamMembers }) => (
  <TeamContainer>
    {teamMembers.map(teamMember => (
      <TeamMember key={teamMember.name}>
        <Headshot headshotUrl={teamMember.headshot.url} />
        <Profile>
          <Name>
            {teamMember.name}
          </Name>
          <Title>
            {teamMember.title}
          </Title>
          <Bio>
            <Text textAlign='left'>
              {teamMember.bio}
            </Text>
          </Bio>
        </Profile>
      </TeamMember>
    ))}
  </TeamContainer>
)

export default TeamMembers
