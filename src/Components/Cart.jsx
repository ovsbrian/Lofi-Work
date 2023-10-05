import { toast } from 'sonner';
 
export const MyToast = () => {
  return (
    <button onClick={() => toast('This is a sonner toast')}>
      Render my toast
    </button>
  );}