import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DG';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;