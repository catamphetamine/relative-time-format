import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BW';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;