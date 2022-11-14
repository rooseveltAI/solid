import useRecordingsList from '../../hooks/use-recordings-list'
import { RecordingsListProps } from 'types/recorder'
import { chakra, IconButton, Stack, Text } from '@chakra-ui/react'

export default function RecordingsList({ audio }: RecordingsListProps) {
  const { recordings, deleteAudio } = useRecordingsList(audio)

  return (
    <Stack className="recordings-container">
      {recordings.length > 0 ? (
        <>
          <Stack py={{ base: '', md: 4 }} className="recordings-list">
            {recordings.map((record) => (
              <Stack
                className="record"
                key={record.key}
                direction="row"
                align="center"
              >
                <audio controls src={record.audio} />
                <Stack className="delete-button-container">
                  <IconButton
                    variant="unstyled"
                    aria-label="Delete"
                    className="delete-button"
                    title="Delete this audio"
                    onClick={() => deleteAudio(record.key)}
                    icon={<i className="ri-more-2-fill" />}
                  />
                </Stack>
              </Stack>
            ))}
          </Stack>
        </>
      ) : (
        <Stack className="no-records">
          {/* <chakra.span> You have no record or uploaded media yet</chakra.span> */}
        </Stack>
      )}
    </Stack>
  )
}
