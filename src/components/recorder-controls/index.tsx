import { formatMinutes, formatSeconds } from '../../utils/format-time'
import { RecorderControlsProps } from 'types/recorder'
// import './styles.css'
import { Button, chakra, IconButton, Stack, Text } from '@chakra-ui/react'

export default function RecorderControls({
  recorderState,
  handlers
}: RecorderControlsProps) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState
  const { startRecording, saveRecording, cancelRecording } = handlers

  return (
    <Stack className="controls-container" align="center" justify="center">
      <Stack className="recorder-display" align="center" justify="center">
        {initRecording && (
          <Stack direction="row" align="center">
            <i className="ri-record-circle-line ri-xl" />
            <chakra.span>{formatMinutes(recordingMinutes)}</chakra.span>
            <chakra.span>:</chakra.span>
            <chakra.span>{formatSeconds(recordingSeconds)}</chakra.span>
          </Stack>
        )}
      </Stack>

      <Stack className="start-button-container" direction="row">
        {initRecording && (
          <Stack className="cancel-button-container">
            <Button
              variant="secondary"
              title="Cancel recording"
              onClick={cancelRecording}
            >
              Cancel
            </Button>
          </Stack>
        )}

        {initRecording ? (
          <Button
            variant="secondary"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
          >
            Save
          </Button>
        ) : (
          <Button
            variant="secondary"
            title="Start recording"
            onClick={startRecording}
          >
            <i
              className="ri-voiceprint-fill ri-lg"
              style={{ marginRight: '8px' }}
            />
            Record
          </Button>
        )}
      </Stack>
    </Stack>
  )
}
