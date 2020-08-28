import styled from 'styled-components'

const TeamContainer = styled.div`
  margin: 50px 0;
`

const TeamMember = styled.div`
  height: 100px;
  margin: 20px 0;
  background-color: #fff;
`

const TeamMembers = ({ teamMembers }) => (
  <TeamContainer>
    {teamMembers.map(teamMember => (
      <TeamMember key={teamMember.name}>
        {teamMember.name}
      </TeamMember>
    ))}
  </TeamContainer>
)

export default TeamMembers
