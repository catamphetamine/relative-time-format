import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BW';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;