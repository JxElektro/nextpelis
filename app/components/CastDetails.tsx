interface CastDetailsProps {
  id: string;
  name : string;
  profile_path : string;
  character : string;
}
/*
const CastDetails = ({ id }: { id: string } { name } : { name: string } { profile_path } : { profile_path: string } { character } : { character: string }) => {
*/

const CastDetails = ({ id }: { id: string }) => {
  

  return (
    <div>CastDetails {id} </div>
  )
}

export default CastDetails