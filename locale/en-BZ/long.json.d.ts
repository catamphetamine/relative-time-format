import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BZ';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;