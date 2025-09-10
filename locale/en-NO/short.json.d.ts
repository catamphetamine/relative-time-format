import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-NO';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;