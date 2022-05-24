import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'en-BZ';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;