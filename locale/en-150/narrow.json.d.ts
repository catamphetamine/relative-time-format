import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-150';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;