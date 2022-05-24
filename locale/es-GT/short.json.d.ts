import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'es-GT';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;