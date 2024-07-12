import React, { useState } from "react";
import { colors } from "../../lib/constants/colors";
import IconBtn from "../buttons/IconBtn";
import MiddleOverlayModal from "../modals/MiddleOverlayModal";
import { View } from "react-native";
import MenuBtn from "../buttons/MenuBtn";
import { useDeletePlaylistQuery } from "../../lib/hooks/queries/playlists/useDeletePlaylistQuery";
import type { Playlist } from "../../lib/constants/responses/playlist";

interface Props {
  targetPlaylist: Playlist;
}

function PlaylistOptions({ targetPlaylist }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate, isPending } = useDeletePlaylistQuery();

  function showModal() {
    setIsModalOpen(true);
  }

  function hideModal() {
    setIsModalOpen(false);
  }

  function deletePlaylistBtnPressHandler() {
    mutate({ playlist_id: targetPlaylist.id });
  }

  return (
    <>
      <IconBtn
        onPress={showModal}
        icon="dots-three-vertical"
        color={colors.baseContent}
      />
      <MiddleOverlayModal
        isModalVisible={isModalOpen}
        closeModalHandler={hideModal}
      >
        <MenuBtn
          onPress={deletePlaylistBtnPressHandler}
          text="Remover playlist"
          icon="squared-minus"
          isPending={isPending}
        />
      </MiddleOverlayModal>
    </>
  );
}

export default PlaylistOptions;
