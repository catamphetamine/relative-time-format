import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-GM';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;