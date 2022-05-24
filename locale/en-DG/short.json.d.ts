import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-DG';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;