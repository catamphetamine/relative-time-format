import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BZ';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;