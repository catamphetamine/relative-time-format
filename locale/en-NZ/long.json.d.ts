import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NZ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;