import RecorderControls from 'components/recorder-controls'
import RecordingsList from 'components/recordings-list'
import useRecorder from 'hooks/use-recorder'
import { UseRecorder } from 'types/recorder'
// import 'app.css'

export default function Session() {
  const { recorderState, ...handlers }: UseRecorder = useRecorder()
  const { audio } = recorderState

  return (
    <section className="voice-recorder">
      <RecorderControls recorderState={recorderState} handlers={handlers} />
      <RecordingsList audio={audio} />
    </section>
  )
}
