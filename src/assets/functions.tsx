// Função de click para trazer o form de editar perfil
export const OpenContainer = (containerId: string, open?: boolean) => {
    const container = document.getElementById(`${containerId}`) as HTMLElement
    open === undefined ? container.classList.toggle('hidden') : open ? container.classList.remove('hidden') : container.classList.add('hidden')
}