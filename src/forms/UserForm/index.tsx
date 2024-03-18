import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from '../../schema/userSchema';

type UserData = {
  name: string;
  age: number;
};

function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit = (data: UserData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Name</label>
        <input id='name' type='text' {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor='age'>Age</label>
        <input id='age' type='number' {...register('age', { valueAsNumber: true })} />
        {errors.age && <p>{errors.age.message}</p>}
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
}

export default UserForm;
