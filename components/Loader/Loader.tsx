import css from './Loader.module.css'

interface LoaderProps {
    isDeleting?: boolean;
    isCreating?: boolean;
}

export default function Loader({ isDeleting = false, isCreating = false }: LoaderProps) {

    return (
        <div className={css.loaderContainer}>
            {isDeleting
                ? <span className={css.loaderDeleting}>Deleting</span>
                : <span className={css.loader}></span>
            }
            {isCreating && <span className={css.loaderCreating}></span>}
        </div>
    )
}